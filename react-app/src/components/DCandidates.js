import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";

const DCandidates = (props) => {
  return <div>from candidates</div>;
};

const mapStateToProps = (state) => ({
  dCandidateList: state.dCandidate.list,
});

const mapActionToProps = {
  fetchAllCandidates: actions.fetchAll,
};

export default connect(mapStateToProps)(DCandidates);
