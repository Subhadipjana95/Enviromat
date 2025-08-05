import React from 'react';

const ProTeamCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg max-w-xs">
      <div className="space-y-4">
        {/* Team Photos */}
        <div className="flex -space-x-2">
          <img 
            src="https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face" 
            alt="Team member 1" 
            className="w-12 h-12 rounded-full border-2 border-white object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
            alt="Team member 2" 
            className="w-12 h-12 rounded-full border-2 border-white object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" 
            alt="Team member 3" 
            className="w-12 h-12 rounded-full border-2 border-white object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900">Pro Team</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            We are here to help your<br />
            project become green
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProTeamCard;
