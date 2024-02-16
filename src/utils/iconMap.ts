// iconMap.ts
import React from 'react';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TagIcon from '@mui/icons-material/Tag';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CampaignIcon from '@mui/icons-material/Campaign';
import GoogleIcon from '@mui/icons-material/Google';
import { SvgIconComponent } from '@mui/icons-material';

// Define the IconMap type for TypeScript
export interface IconMap {
  [key: string]: React.ReactElement;
}

// Map icon identifiers to icon components
// export const iconMap: IconMap = {
//   RocketLaunchIcon: <RocketLaunchIcon />,
//   TagIcon: <TagIcon />,
//   LocationSearchingIcon: <LocationSearchingIcon />,
//   BarChartIcon: <BarChartIcon />,
//   AssessmentIcon: <AssessmentIcon />,
//   ManageAccountsIcon: <ManageAccountsIcon />,
//   CampaignIcon: <CampaignIcon />,
//   GoogleIcon: <GoogleIcon />,
// };
