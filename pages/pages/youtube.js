import React from "react";
import NavTabs from "../../components/NavTabs";
import ProfileHeaderPage from "../../components/ProfileHeaderPage";
import SectionHeader from "../../components/SectionHeader";

const youtubeTitle = "Most Recent";
const youtubeDescription =
  "Prefer video based learning? Check out my latest videos from my YouTube Channel";

function YouTube() {
  return (
    <ProfileHeaderPage>
      <NavTabs />
      <SectionHeader
        sectionTitle={youtubeTitle}
        sectionDescription={youtubeDescription}
      />
      <div>YouTube Videos here</div>
      <div>YouTube Videos here</div>
      <div>YouTube Videos here</div>
    </ProfileHeaderPage>
  );
}

export default YouTube;
