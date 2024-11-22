import React, { useState, Suspense } from "react";

// Lazy loading the Profile component
const Profile = React.lazy(() => import("./Profile"));

export default function LazyLoadingExample() {
  // Define the state to control when to show the Profile component
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div>
      <h1>Lazy Loading Demo</h1>
      <p>This is a simple React app demonstrating lazy loading.</p>

      {/* Button to show the Profile component */}
      <button onClick={() => setShowProfile(true)}>Show Profile</button>

      {/* Conditionally render Profile component based on state */}
      {showProfile && (
        <Suspense fallback={<div>Loading Profile...</div>}>
          <Profile />
        </Suspense>
      )}

      <p>The rest of the content is loaded as usual.</p>
    </div>
  );
}

