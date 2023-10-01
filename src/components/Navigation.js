import { Navigation } from '@shopify/polaris';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftMinor,
  HomeMajor,
  OrdersMajor,
} from '@shopify/polaris-icons';

export default function AppNavigation() {
  const navigate = useNavigate();
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: '/',
            label: 'Home',
            icon: ArrowLeftMinor,
            selected: window.location.pathname === '/',
            onClick: () => { navigate("/")}
          },
        ]}
      />
      <Navigation.Section
        separator
        title="Excercise 1"
        items={[
          {
            url: '/',
            label: 'Account',
            icon: HomeMajor,
            selected: window.location.pathname === '/account',
            onClick: () => { navigate("/account")}
          },
          {
            url: '/',
            label: 'Address',
            icon: OrdersMajor,
            selected: window.location.pathname === '/address',
            onClick: () => { navigate("/address")}
          },
        ]}
      />
    </Navigation>
  );
}