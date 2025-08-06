const ServiceRunner=require("../models/ServiceRunnerModel")
const Order = require("../models/Order");
const PickupRequest = require("../models/PickupRequest");


// 1. Add to runner's bag (order or pickup)
exports.addOrderOrPickupToBag = async (req, res) => {
  const { type, itemId } = req.body; // type: 'order' or 'pickup'
  const runnerId = req.user.id;

  try {
    const runner = await ServiceRunner.findById(runnerId);
    if (!runner) return res.status(404).json({ error: "Runner not found" });

    if (type === "order") {
      const order = await Order.findById(itemId);
      if (!order) return res.status(404).json({ error: "Order not found" });

      order.deliveryStatus = "assigned";
      order.deliveredBy = runnerId;
      await order.save();

      runner.assignedDeliveries.push(itemId);
    } else if (type === "pickup") {
      const pickup = await PickupRequest.findById(itemId);
      if (!pickup) return res.status(404).json({ error: "Pickup not found" });

      pickup.pickupStatus = "assigned";
      pickup.pickupBy = runnerId;
      await pickup.save();

      runner.assignedPickups.push(itemId);
    } else {
      return res.status(400).json({ error: "Invalid type" });
    }

    await runner.save();
    res.status(200).json({ message: `${type} added to runner's bag.` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};


// 2. Remove from runner's bag
exports.removeOrderOrPickupFromBag = async (req, res) => {
  const { type, itemId } = req.body;
  const runnerId = req.user.id;

  try {
    const runner = await ServiceRunner.findById(runnerId);
    if (!runner) return res.status(404).json({ error: "Runner not found" });

    if (type === "order") {
      await Order.findByIdAndUpdate(itemId, {
        deliveredBy: null,
        deliveryStatus: "processing",
      });

      runner.assignedDeliveries = runner.assignedDeliveries.filter(
        (id) => id.toString() !== itemId
      );
    } else if (type === "pickup") {
      await PickupRequest.findByIdAndUpdate(itemId, {
        pickupBy: null,
        pickupStatus: "processing",
      });

      runner.assignedPickups = runner.assignedPickups.filter(
        (id) => id.toString() !== itemId
      );
    } else {
      return res.status(400).json({ error: "Invalid type" });
    }

    await runner.save();
    res.status(200).json({ message: `${type} removed from runner's bag.` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// 3. Mark delivery/pickup as done
exports.doneDeliverOrPickup = async (req, res) => {
  const { type, itemId } = req.body;
  const runnerId = req.user.id;
  try {
    const runner = await ServiceRunner.findById(runnerId);
    if (!runner) return res.status(404).json({ error: "Runner not found" });

    if (type === "order") {
      const order = await Order.findById(itemId);
      if (!order || order.deliveredBy?.toString() !== runnerId)
        return res.status(403).json({ error: "Unauthorized or not assigned" });

      order.deliveryStatus = "delivered";
      order.deliveredAt = new Date();
      await order.save();

      runner.assignedDeliveries = runner.assignedDeliveries.filter(
        (id) => id.toString() !== itemId
      );

      runner.creditPoints += 5;
    } else if (type === "pickup") {
      const pickup = await PickupRequest.findById(itemId);
      if (!pickup || pickup.pickupBy?.toString() !== runnerId)
        return res.status(403).json({ error: "Unauthorized or not assigned" });

      pickup.pickupStatus = "delivered";
      pickup.pickupDate = new Date();
      await pickup.save();

      runner.assignedPickups = runner.assignedPickups.filter(
        (id) => id.toString() !== itemId
      );

      runner.creditPoints += 10;
    } else {
      return res.status(400).json({ error: "Invalid type" });
    }

    await runner.save();
    res.status(200).json({ message: `${type} marked as completed.` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};