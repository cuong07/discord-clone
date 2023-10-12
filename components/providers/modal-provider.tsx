"use client";
import { useEffect, useState } from "react";

import { CreateServerModal } from "@/components/modals/create-server-modal";
import { InviteModal } from "@/components/modals/invite-modal";
import { EditServerModal } from "@/components/modals/edit-server-modal";
import { MemberModal } from "@/components/modals/member-modal";
import { CreateChannelModal } from "@/components/modals/create-channel-modal";
import { LeaveServerModal } from "../modals/leave-server-modal";
import { DeleteServerModal } from "../modals/delete-server-modal";

export const ModalProvider = () => {
  const [isMounted, setItMounted] = useState(false);

  useEffect(() => {
    setItMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MemberModal />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
    </>
  );
};
