import React from 'react';
import {Avatar, Box, Divider, Icon, Text, HStack} from 'native-base';
import VIcon from 'react-native-vector-icons/MaterialCommunityIcons';

type ItemType = {
  name: string;
  icon: string;
  divider?: boolean;
  arrow?: string;
};
const Item = ({
  name,
  icon,
  divider = true,
  arrow = 'location-enter',
}: ItemType) => {
  return (
    <>
      <Box bg="white" p="4" justifyContent="space-between" flexDirection="row">
        <HStack>
          <Icon mr="2" size="7" as={VIcon} name={icon} />
          <Text fontSize={20}>{name}</Text>
        </HStack>
        <Icon size="6" as={VIcon} name={arrow} />
      </Box>
      {divider && <Divider />}
    </>
  );
};

export const MyScreen: React.FC = () => {
  return (
    <Box>
      <Box mb="6" bg="white" pt="10" pb="10" alignItems="center">
        <Avatar
          size="2xl"
          source={{uri: 'https://picsum.photos/id/1020/400/400'}}
        />
      </Box>
      <Item name="账号信息" icon="account-settings" />
      <Item
        name="单词本设置"
        icon="book-multiple"
        arrow="content-save-cog-outline"
      />
      <Item name="OpenAI设置" icon="robot-angry" arrow="hammer-sickle" />
      <Item
        divider={false}
        name="Azure设置"
        icon="microsoft-azure"
        arrow="cog"
      />
    </Box>
  );
};
