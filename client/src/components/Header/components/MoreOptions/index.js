import { useEffect, useState } from 'react';
import { Flex, Icon } from '@chakra-ui/react';
import { BiGift } from 'react-icons/bi';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import { HiDotsHorizontal } from 'react-icons/hi';
import Options from './Options';

const optionsList = {
  anghamiList: [
    { name: 'Manage your subscriptions', href: '#' },
    { name: 'Redeem', href: '#' },
    { name: 'Artist Connect', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Careers', href: '#' },
  ],
  accountList: [
    {
      name: 'Settings',
      href: '#',
      icon: <Icon marginRight="0.5em" as={FiSettings} />,
    },
    {
      name: 'Buy a gift',
      href: '#',
      icon: <Icon marginRight="0.5em" as={BiGift} />,
    },
    {
      name: 'Logout',
      href: '#',
      icon: <Icon marginRight="0.5em" as={FiLogOut} />,
    },
  ],
};
const MoreOptions = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    const settings = document.getElementById('dots');

    document.addEventListener('mousedown', (e) => {
      if (settings.contains(e?.target)) {
        setShowDropdown(true);
      } else {
        setShowDropdown(false);
      }
    });
  }, []);
  return (
    <Flex id="dots" position="relative">
      <Icon
        cursor="pointer"
        w="1.5em"
        h="1.5em"
        as={HiDotsHorizontal}
        color="icon.100"
      />
      {showDropdown && (
        <Options optionsList={optionsList} />
      )}
    </Flex>
  );
};

export default MoreOptions;
