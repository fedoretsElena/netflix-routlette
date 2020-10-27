import Results from './components/Results';

const routes = [
  {
  path: '',
  exact: true,
  component: Results
},
{
  path: '/search/:value',
  exact: true,
  component: Results
}];

export default routes;
