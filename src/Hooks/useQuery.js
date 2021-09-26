import { useHistory, useLocation } from 'react-router';
import qs from 'qs';

const useQuery = () => {
  const history = useHistory();
  const { search } = useLocation();
  const query = qs.parse(search, {
    ignoreQueryPrefix: true,
  });
  const queryName = query.name;

  const onMoveDetailsPage = project => {
    history.push(`/project?name=${project.name}`);
  };

  return [queryName, onMoveDetailsPage];
};

export default useQuery;
