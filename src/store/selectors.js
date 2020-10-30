export const moviesDataSelector = ({movies}) => movies.data;
export const moviesLoadingSelector = ({movies}) => movies.loading;
export const moviesErrorSelector = ({movies}) => movies.error;
export const moviesTotalAmountSelector = ({movies}) => movies.totalAmount;

export const filterParamsSelector = ({filterParams}) => filterParams;
