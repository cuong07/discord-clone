"use client";

import Image from "next/image";
import { redirect, useParams, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { ActionTooltip } from "@/components/action-tooltip";

interface NavigationItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const NavigationItem = ({ id, name, imageUrl }: NavigationItemProps) => {
  const server = useParams();
  const router = useRouter();

  const handleSelectServer = () => {
    router.push(`/servers/${id}`);
  };

  return (
    <ActionTooltip side="right" label={name} align="center">
      <button
        onClick={handleSelectServer}
        className="group relative flex items-center"
      >
        <div
          className={cn(
            "absolute left-0 bg-primary rounded-full transition-all w-1",
            server?.serverId !== id && "group-hover:h-5",
            server?.serverId === id ? "h-9" : "h-2"
          )}
        />
        <div
          className={cn(
            "relative group flex mx-3 h-12 w-12 rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden",
            server?.serverId !== id && "bg-primary/10 text-primary rounded-2xl "
          )}
        >
          <Image src={imageUrl} alt="Channel" fill />
        </div>
      </button>
    </ActionTooltip>
  );
};
