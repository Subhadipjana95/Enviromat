const express = require('express');
const router = express.Router();
const { auth } = require("../middleware/auth");

const {
  addOrderOrPickupInBag,
  removeOrderOrPickupFromBag,
  doneDeliverOrPickup
} = require("../controllers/ServiceRunnerController");

router.post('/add-to-bag',auth, addOrderOrPickupInBag);

router.post('/remove-from-bag',auth, removeOrderOrPickupFromBag);

router.post('/mark-done',auth, doneDeliverOrPickup);


module.exports = router;