"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import { TeamMember } from "@/types";
import TeamMemberModal from "./TeamMemberModal";
import { TeamData } from "@/common/constant";
import Styles from "./teamSection.module.scss";

const getColumnConfig = (teamLength: number) => {
  const config = [];

  if (teamLength === 1) {
    config.push(1);
  } else if (teamLength === 2) {
    config.push(1, 2);
  } else {
    config.push(2);

    let remainingMembers = teamLength - 4; // 2 members at start and end
    const middleIndex = Math.floor(teamLength / 2);
    let hasAddedFour = false;

    while (remainingMembers > 0) {
      if (
        remainingMembers >= 4 &&
        !hasAddedFour &&
        config.length >= middleIndex
      ) {
        config.push(4);
        remainingMembers -= 4;
        hasAddedFour = true;
      } else {
        const columnSize = Math.min(remainingMembers, 3);
        config.push(columnSize);
        remainingMembers -= columnSize;
      }
    }
  }

  return config;
};

interface MemberPhotoProps {
  member: TeamMember;
  onClick: (member: TeamMember) => void;
}
const MemberPhoto = ({ member, onClick }: MemberPhotoProps) => {
  return (
    <div
      className={Styles.gridItem}
      onClick={() => {
        onClick(member);
      }}
    >
      <Image
        src={member?.photoUrl}
        width={100}
        height={100}
        alt={member?.name}
      />
    </div>
  );
};

const Tabs = ["All", "Product", "Tech", "Design", "Ops", "Advise"];

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [team, setTeam] = useState([...TeamData]);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null); // Track the selected member for the popup

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobileView(window.innerWidth <= 426);
      if (team?.length > 6 && window.innerWidth <= 426) {
        setShowMore(true);
      }
    };

    // Initial check
    checkWindowSize();

    // Event listener for window resize
    window.addEventListener("resize", checkWindowSize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, [team?.length]);

  const handleTeamMemberClick = (member: TeamMember) => {
    console.log("Member", member);
    setSelectedMember(member);
  };

  const closePopup = () => {
    setSelectedMember(null);
  };

  // Filter team members based on the selected tab and department
  const filteredTeam =
    activeTab === 0
      ? TeamData
      : TeamData.filter(
          (member) =>
            member.department.toLowerCase() === Tabs[activeTab].toLowerCase()
        );

  useEffect(() => {
    setTeam(filteredTeam); // Update the team based on the selected tab and department
  }, [activeTab, filteredTeam]);

  const renderGridItems = () => {
    const columnConfig =
      isMobileView && showMore ? [3, 3, 3] : getColumnConfig(team?.length);
    let teamIndex = 0;

    return (
      <>
        {columnConfig.map((columnSize, columnIndex) => (
          <div
            key={columnIndex}
            className={Styles.gridColumn}
            style={{
              paddingTop: columnIndex % 2 === 0 ? "40px" : "",
            }}
          >
            {Array.from({ length: columnSize }).map((_, index) => (
              <>
                <MemberPhoto
                  key={teamIndex}
                  member={TeamData[teamIndex]}
                  onClick={handleTeamMemberClick}
                />
                <div style={{ display: "none" }}>{teamIndex++}</div>
              </>
            ))}
          </div>
        ))}
      </>
    );
  };

  return (
    <div className={Styles.container}>
      <h1>Our team</h1>
      <div className={Styles.tabsContainer}>
        {Tabs?.map((tab, index: number) => (
          <div
            key={index}
            className={`${Styles.tab} ${
              activeTab === index ? Styles.active : ""
            } `}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className={Styles.gridContainer}>{renderGridItems()}</div>
      {isMobileView && team.length > 6 && (
        <Button variant="outlined" onClick={() => setShowMore(!showMore)}>
          {showMore ? "View All" : "View less"}
        </Button>
      )}

      {selectedMember && (
        <TeamMemberModal member={selectedMember} onClose={closePopup} />
      )}

      <Image
        src="/assets/images/aboutPage/spheres.png"
        width={40}
        height={50}
        alt="layout-object"
        className={Styles.layoutObject1}
      />
      <Image
        src="/assets/images/aboutPage/spheres3.png"
        width={100}
        height={100}
        alt="layout-object"
        className={Styles.layoutObject2}
      />

      <Image
        src="/assets/images/aboutPage/spheres4.png"
        width={62}
        height={62}
        alt="layout-object"
        className={Styles.layoutObject4}
      />
      <Image
        src="/assets/images/aboutPage/spheres4.png"
        width={40}
        height={40}
        alt="layout-object"
        className={Styles.layoutObject5}
      />
      <Image
        src="/assets/images/aboutPage/spheres5.png"
        width={84}
        height={84}
        alt="layout-object"
        className={Styles.layoutObject6}
      />
    </div>
  );
};

export default TeamSection;
