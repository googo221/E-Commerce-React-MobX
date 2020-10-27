import React, { useEffect } from 'react';

import { styled } from '@material-ui/core';

import { IRootStore } from '../../stores/root-store';
import injectStore from '../../utils/mobx-react';
import Candidate from './candidate';
import FiltersContainer from '../Filters/filters-container';

type CandidatesProps = {
  rootStore?: IRootStore;
};

const Grid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
  gap: '1rem',
});

const Candidates = injectStore(({ rootStore }: CandidatesProps) => {
  const {
    dataStore: {
      candidates: { candidatesListing, getCandidates },
    },
  } = rootStore!;

  useEffect(() => {
    getCandidates();
  }, [getCandidates]);

  return (
    <>
      <FiltersContainer />
      <Grid>
        {candidatesListing.map(
          (candidate) =>
            candidate && (
              <Candidate candidateId={candidate.id} key={candidate.id} />
            )
        )}
      </Grid>
    </>
  );
});

export default Candidates;
