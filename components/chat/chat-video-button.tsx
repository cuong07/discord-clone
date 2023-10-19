"use client";

import qs from "query-string";
import { ActionTooltip } from "@/components/action-tooltip";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Video, VideoOff } from "lucide-react";
import { Icon } from "@radix-ui/react-select";

export const ChatVideoButton = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const isVideo = searchParams?.get("video");

  const Icon = isVideo ? VideoOff : Video;

  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname || "",
        query: {
          video: isVideo ? undefined : true,
        },
      },
      { skipNull: true }
    );
    router.push(url);
  };

  const tooltipLabel = isVideo ? "End video call" : "Start video call";
  return (
    <ActionTooltip side="bottom" label={tooltipLabel}>
      <button className="hover:opacity-75 transition mr-4" onClick={onClick}>
        <Icon className="w-6 h-6 text-zinc-500 dark:text-zinc-400" />
      </button>
    </ActionTooltip>
  );
};
