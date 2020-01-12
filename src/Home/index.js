import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";
import Popover from "../Popover";
import PopoverItem from "../Popover/PopoverItem";

export default class Home extends Component {
  state = {
    showPopOver: null
  };

  openPopover = () => {
    const { showPopOver } = this.state;
    const { groupOfMenu } = this.props;
    return (
      <div className="home-popoverblock">
        {groupOfMenu &&
          groupOfMenu.map((eachGroup, index) => {
            const uniqueId = Math.random();
            const actionId = `test-id ${uniqueId}`;
            return (
              <div className="home-group" key={index}>
                <Popover
                  element={
                    <div className="group-container">
                      <div
                        className="title"
                        id={actionId}
                        onClick={() => {
                          this.setState({ showPopOver: index });
                        }}
                      >
                        {eachGroup.title}
                      </div>
                      <div className="subtitle">
                        Click at group name to see popover!
                      </div>
                    </div>
                  }
                  openPopOver={showPopOver === index}
                  popoverClickOutside={() =>
                    this.setState({ showPopOver: null })
                  }
                  size={{
                    width: "11%",
                    elementWidth: "102"
                  }}
                  popOverId={actionId}
                >
                  {eachGroup.popoverItems.map((item, index) => {
                    return (
                      <PopoverItem
                        title={item.label}
                        index={index}
                        key={index}
                        popoverLiSelect={
                          elementIndex => console.log(elementIndex)
                          // this.handlePageSizeChange(item.value)
                        }
                      />
                    );
                  })}
                </Popover>
              </div>
            );
          })}
      </div>
    );
  };
  render() {
    return (
      <div className="home-main">
        <div className="home-header">Custom Popover</div>
        {this.openPopover()}
      </div>
    );
  }
}
Home.defaultProps = {
  groupOfMenu: [
    {
      title: "Group 1",
      popoverItems: [
        { label: "Group 1 item 1", value: "Group 1 item 1" },
        { label: "Group 1 item 2", value: "Group 1 item 2" },
        { label: "Group 1 item 3", value: "Group 1 item 3" },
        { label: "Group 1 item 4", value: "Group 1 item 4" }
      ]
    },
    {
      title: "Group 2",
      popoverItems: [
        { label: "Group 2 item 1", value: "Group 2 item 1" },
        { label: "Group 2 item 2", value: "Group 2 item 2" },
        { label: "Group 2 item 3", value: "Group 2 item 3" },
        { label: "Group 2 item 4", value: "Group 2 item 4" }
      ]
    },
    {
      title: "Group 3",
      popoverItems: [
        { label: "Group 3 item 1", value: "Group 3 item 1" },
        { label: "Group 3 item 2", value: "Group 3 item 2" },
        { label: "Group 3 item 3", value: "Group 3 item 3" },
        { label: "Group 3 item 4", value: "Group 3 item 4" }
      ]
    },
    {
      title: "Group 4",
      popoverItems: [
        { label: "Group 4 item 1", value: "Group 4 item 1" },
        { label: "Group 4 item 2", value: "Group 4 item 2" },
        { label: "Group 4 item 3", value: "Group 4 item 3" },
        { label: "Group 4 item 4", value: "Group 4 item 4" }
      ]
    },
    {
      title: "Group 5",
      popoverItems: [
        { label: "Group 5 item 1", value: "Group 5 item 1" },
        { label: "Group 5 item 2", value: "Group 5 item 2" },
        { label: "Group 5 item 3", value: "Group 5 item 3" },
        { label: "Group 5 item 4", value: "Group 5 item 4" }
      ]
    },
    {
      title: "Group 6",
      popoverItems: [
        { label: "Group 6 item 1", value: "Group 6 item 1" },
        { label: "Group 6 item 2", value: "Group 6 item 2" },
        { label: "Group 6 item 3", value: "Group 6 item 3" },
        { label: "Group 6 item 4", value: "Group 6 item 4" }
      ]
    }
  ]
};

Home.propTypes = {
  groupOfMenu: PropTypes.array
};
