import React from "react";
import Image from "next/image";
import { TeamMember } from "@/types";
import Styles from "./teamMemberPopup.module.scss";

interface TeamMemberModalProps {
  member: TeamMember;
  onClose: () => void;
}

const TeamMemberModal = ({ member, onClose }: TeamMemberModalProps) => {
  return (
    <div className={Styles.popupContainer}>
      <Image
        src="/assets/vectors/common/cross.svg"
        alt="close"
        width={40}
        height={40}
        className={Styles.cross}
        onClick={onClose}
      />
      <div className={Styles.popupContent}>
        <Image
          src={member.photoUrl}
          alt={member.name}
          width={200}
          height={200}
        />
        <p className={Styles.name}>{member.name}</p>
        <p className={Styles.intro}>{member.intro}</p>
      </div>
    </div>
  );
};

export default TeamMemberModal;
