import React from 'react';

import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import Chip from '@material-ui/core/Chip';
import styled from '@material-ui/core/styles/styled';

import injectStore from '../../utils/mobx-react';
import { IRootStore } from '../../stores/root-store';
import IconTitle from './icon-title';

type CandidateProps = {
  rootStore?: IRootStore;
  candidateId: string;
};

const AvatarContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '.75rem',
});

const ProfilePicture = styled(Avatar)({
  height: '7.25rem',
  width: '7.25rem',
  marginTop: '1.2rem',
  marginBottom: '1rem',
});

const Description = styled(Typography)({
  paddingBottom: '.3rem',
  fontSize: '.9rem',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 4,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const Container = styled(Paper)({
  paddingLeft: '.625rem',
});

const ChipContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Icon = styled(BusinessCenterRoundedIcon)({
  fontSize: '1rem',
  paddingBottom: '.5rem',
});

const Paragraph = styled(Typography)({
  fontSize: '.9rem',
  paddingBottom: '.5rem',
  marginLeft: '.375rem',
});

const ChipParagraph = styled(Chip)({
  fontSize: '.9rem',
  marginLeft: '.75rem',
  marginBottom: '.5rem',
});

const Candidate = injectStore(({ rootStore, candidateId }: CandidateProps) => {
  const {
    dataStore: {
      candidates: { candidates },
    },
  } = rootStore!;

  const candidate = candidates.get(candidateId)!;

  return (
    <Container>
      <AvatarContainer>
        <ProfilePicture />
        <Typography color={'secondary'}>{candidate.fullName}</Typography>
      </AvatarContainer>
      <ChipContainer>
        <Typography>BizDev +2</Typography>
      </ChipContainer>
      <IconTitle
        title={`${candidate.nbYearExp} years`}
        icon={DateRangeRoundedIcon}
      />
      <IconTitle
        title={`$${candidate.fixSalary.toFixed()}K + variable`}
        icon={MonetizationOnRoundedIcon}
      />
      <ChipContainer>
        <Icon />
        {candidate.keyExperienceLength > 1 ? (
          <>
            <Paragraph>{candidate.keyExperiences[0]}</Paragraph>
            <ChipParagraph
              label={`+${candidate.keyExperienceLength - 1}`}
              variant="outlined"
              size="small"
            />
          </>
        ) : (
          <Paragraph>{candidate.keyExperiences[0]}</Paragraph>
        )}
      </ChipContainer>
      <IconTitle title={'OUR THOUGHTS'} icon={FavoriteRoundedIcon} />
      <Description>{candidate.ourThoughts}</Description>
    </Container>
  );
});

export default Candidate;
