import React, { Component } from "react";
import { Container, Header, Tab, Tabs, ScrollableTab } from "native-base";
import ChatTab from "./ChatTab";
import StudyTab from "./StudyTab";
export default class ForumPage extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="聊天闲谈">
            <ChatTab />
          </Tab>
          <Tab heading="学术讨论">
            <StudyTab />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
