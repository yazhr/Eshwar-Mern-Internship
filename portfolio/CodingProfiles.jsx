import React from "react";

const CodingProfiles = () => {
  return (
    <div className="flex flex-col items-center text-lg text-black mt-5"> {/* Added margin-top for spacing */}
      <h2 className="text-2xl font-bold mb-4">Coding Profiles</h2> {/* Added margin-bottom for spacing */}
      <ul className="list-disc pl-5">
        <li>
          <strong>Leetcode:</strong> Solved 150+ problems | Max Rating: 1,539 | Global rank: 212,014 | <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="underline text-lg">View Profile</a>
        </li>
        <li>
          <strong>Hacker Rank:</strong> 2 Star Python, 1 Star C++ | <a href="https://www.hackerrank.com" target="_blank" rel="noopener noreferrer" className="underline text-lg">View Profile</a>
        </li>
        <li>
          <strong>Skill Rack:</strong> Solved 200+ problems | Received 2 certificates | 60+ Bronzes | <a href="https://www.skillrack.com" target="_blank" rel="noopener noreferrer" className="underline text-lg">View Profile</a>
        </li>
      </ul>
    </div>
  );
};

export default CodingProfiles;
