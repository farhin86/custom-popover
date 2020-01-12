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
              <div className="home-group">
                <Popover
                  element={
                    <div
                      className="title"
                      id={actionId}
                      onClick={() => {
                        this.setState({ showPopOver: index });
                      }}
                    >
                      {eachGroup.title}
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
                  overLay={true} //false
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
      title: "Group1",
      popoverItems: [
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 50, value: 50 },
        { label: 100, value: 100 }
      ]
    },
    {
      title: "Group2",
      popoverItems: [
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 50, value: 50 },
        { label: 100, value: 100 }
      ]
    },
    {
      title: "Group3",
      popoverItems: [
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 50, value: 50 },
        { label: 100, value: 100 }
      ]
    },
    {
      title: "Group4",
      popoverItems: [
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 50, value: 50 },
        { label: 100, value: 100 }
      ]
    },
    {
      title: "Group5",
      popoverItems: [
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 50, value: 50 },
        { label: 100, value: 100 }
      ]
    },
    {
      title: "Group6",
      popoverItems: [
        { label: "a", value: 10 },
        { label: 20, value: 20 },
        { label: 50, value: 50 },
        { label: 100, value: 100 }
      ]
    }
  ]
};

Home.propTypes = {
  groupOfMenu: PropTypes.array
};
