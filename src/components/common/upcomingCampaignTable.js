import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Moment from "react-moment";

class UpcomingCampaignTable extends Component {
  render() {
    const { selectedTab, upcomingCampaignList, startDate } = this.props;
    return (
      <React.Fragment>
        {selectedTab === "Upcoming Campaigns" && (
          <table>
            <thead>
              <tr>
                <th width="15%">Date</th>
                <th width="25%">Campaign</th>
                <th width="20%">View</th>
                <th width="40%">Actions</th>
              </tr>
            </thead>
            <tbody>
              {upcomingCampaignList.map((list, i) => (
                <tr key={i}>
                  <td data-label="date">
                    <div className="campaign-date">
                      <Moment
                        format="MMM YYYY, DD"
                        date={list.createdOn}
                      ></Moment>
                    </div>
                    <div className="campaign-date-from-now">
                      <Moment fromNow>{list.createdOn}</Moment>
                    </div>
                  </td>
                  <td data-label="campaign">
                    <div className="clearfix campaign-details">
                      <div className="campaign-img">
                        <img
                         alt="campaign"
                          src={require("../../images/campaign-images/" +
                            list.image_url)}
                        />
                      </div>
                      <div className="campaign-info">
                        <div className="campaign-name">{list.name}</div>
                        <div className="campaign-region">{list.region}</div>
                      </div>
                    </div>
                  </td>
                  <td data-label="view">
                    <a
                      onClick={() => this.props.setPrice(list)}
                      data-toggle="modal"
                      data-target="#pricingModal"
                      className="icon-details clearfix"
                    >
                      <div className="icon-img">
                        <img alt="price" src={require("../../images/Price.png")} />
                      </div>
                      <div className="icon-name">View Pricing</div>
                    </a>
                  </td>

                  <td data-label="actions">
                    <a
                      href={list.csv}
                      target="_blank"
                      className="icon-details clearfix"
                    >
                      <div className="icon-img">
                        <img alt="file" src={require("../../images/file.png")} />
                      </div>
                      <div className="icon-name">CSV</div>
                    </a>

                    <a
                      href={list.report}
                      target="_blank"
                      className="icon-details clearfix"
                    >
                      <div className="icon-img">
                        <img
                          alt="report"
                          src={require("../../images/statistics-report.png")}
                        />
                      </div>
                      <div className="icon-name">Report</div>
                    </a>

                    <a className="icon-details clearfix pos-relative calender-details">
                      <DatePicker
                        selected={startDate}
                        onChange={(value, e) =>
                          this.props.changeDate(value, list.id)
                        }
                        name={list.name}
                      />

                      <div className="calender-img">
                        <img alt="calender" src={require("../../images/calendar.png")} />
                      </div>
                      <div className="calender-name">Schedule Again</div>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </React.Fragment>
    );
  }
}

export default UpcomingCampaignTable;
