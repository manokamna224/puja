'use client';

import { useAuth } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Profile</h1>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Account Information</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone Number:</span>
                    <span className="font-medium">{user?.phoneNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Account Status:</span>
                    <span className="text-green-600 font-medium">Active</span>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Recent Activity</h2>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Last login: {new Date().toLocaleDateString()}</p>
                  <p>• Account created: {new Date().toLocaleDateString()}</p>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Quick Actions</h2>
                <div className="space-y-2">
                  <button className="w-full text-left p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                    <span className="font-medium text-orange-800">View Booking History</span>
                  </button>
                  <button className="w-full text-left p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                    <span className="font-medium text-orange-800">Update Profile</span>
                  </button>
                  <button className="w-full text-left p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                    <span className="font-medium text-orange-800">Contact Support</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
} 