import { users } from "data/team";
import React from "react";
import { TeamMemberCard } from "./team-member-card";
import { cn } from "app/lib/utils";

export default function Team() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-medium tracking-tight">
        Meet The Team
      </h1>

      {users.map((user, index) => (
        <TeamMemberCard
          key={index}
          userDetails={user}
          className={cn((index + 1) % 2 === 0 ? "flex-row-reverse" : "")}
        />
      ))}
    </div>
  );
}
