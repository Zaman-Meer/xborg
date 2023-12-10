"use client";
import { useState, useEffect } from "react";
import Styles from "./teamSection.module.scss";
import Image from "next/image";
import Button from "@/components/common/Button";
import { TeamMember } from "@/types";
import TeamMemberModal from "./TeamMemberModal";

const Tabs = ["All", "Product", "Tech", "Design", "Ops", "Advise"];

const TeamData: TeamMember[] = [
  {
    name: "Breno Lennard",
    intro: "Lorem ipsum dolor sit amet",
    photoUrl: "/assets/images/team/p9.png",
    department: "ops",
  },
  {
    name: "Breno Lennard",
    intro: "Lorem ipsum dolor sit amet",
    photoUrl: "/assets/images/team/p10.png",
    department: "ops",
  },
  {
    name: "Breno Lennard",
    intro: "Lorem ipsum dolor sit amet",
    photoUrl: "/assets/images/team/p14.png",
    department: "ops",
  },
  {
    name: "Breno Lennard",
    intro: "Lorem ipsum dolor sit amet",
    photoUrl: "/assets/images/team/p13.png",
    department: "ops",
  },
  {
    name: "Breno Lennard",
    intro: "Lorem ipsum dolor sit amet",
    photoUrl: "/assets/images/team/p19.png",
    department: "advisors",
  },
  {
    name: "Breno Lennard",
    intro: "Lorem ipsum dolor sit amet",
    photoUrl: "/assets/images/team/p20.png",
    department: "advisors",
  },
  {
    name: "Breno Lennard",
    intro: "Lorem ipsum dolor sit amet",
    photoUrl: "/assets/images/team/p16.png",
    department: "advisors",
  },
  {
    name: "Breno Lennard",
    intro: "Lorem ipsum dolor sit amet",
    photoUrl: "/assets/images/team/p17.png",
    department: "advisors",
  },
  {
    name: "Breno Lennard",
    intro: "Lorem ipsum dolor sit amet",
    photoUrl: "/assets/images/team/p5.png",
    department: "tech",
  },
  {
    name: "Breno Lennard",
    intro: "Lorem ipsum dolor sit amet",
    photoUrl: "/assets/images/team/p3.png",
    department: "tech",
  },
  {
    name: "Breno Lennard",
    intro: "Lorem ipsum dolor sit amet",
    photoUrl: "/assets/images/team/p4.png",
    department: "tech",
  },
  {
    name: "Breno Lennard",
    intro: "Lorem ipsum dolor sit amet",
    photoUrl: "/assets/images/team/p12.png",
    department: "advisors",
  },
  {
    name: "Breno Lennard",
    intro: "Lorem ipsum dolor sit amet",
    photoUrl: "/assets/images/team/p15.png",
    department: "advisors",
  },
  {
    name: "Breno Lennard",
    intro: "Lorem ipsum dolor sit amet",
    photoUrl: "/assets/images/team/p11.png",
    department: "advisors",
  },
  {
    name: "Breno Lennard",
    intro: "Lorem ipsum dolor sit amet",
    photoUrl: "/assets/images/team/p8.png",
    department: "design",
  },
  {
    name: "Breno Lennard",
    intro: "Lorem ipsum dolor sit amet",
    photoUrl: "/assets/images/team/p7.png",
    department: "design",
  },
  {
    name: "Breno Lennard",
    intro: "Lorem ipsum dolor sit amet",
    photoUrl: "/assets/images/team/p6.png",
    department: "design",
  },
  {
    name: "Breno Lennard",
    intro: "Lorem ipsum dolor sit amet",
    photoUrl: "/assets/images/team/p18.png",
    department: "advisors",
  },
  {
    name: "Breno Lennard",
    intro: "Lorem ipsum dolor sit amet",
    photoUrl: "/assets/images/team/p2.png",
    department: "product",
  },
  {
    name: "Breno Lennard",
    intro: "Lorem ipsum dolor sit amet",
    photoUrl: "/assets/images/team/p1.png",
    department: "product",
  },
];

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
  }, []);

  const handleTeamMemberClick = (index: number) => {
    setSelectedMember(TeamData[index]);
  };

  const closePopup = () => {
    setSelectedMember(null);
  };

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
  }, [activeTab]);

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
            {Array.from({ length: columnSize }).map(() => (
              <div
                key={teamIndex}
                className={Styles.gridItem}
                onClick={() => handleTeamMemberClick(teamIndex)}
              >
                <Image
                  src={TeamData[teamIndex]?.photoUrl}
                  width={100}
                  height={100}
                  alt={TeamData[teamIndex]?.name}
                />
                <div
                  style={{
                    display: "none",
                  }}
                >
                  {teamIndex++}
                </div>
              </div>
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
