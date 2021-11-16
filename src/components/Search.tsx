import  { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { getWeather, setLoading } from '../store/actions/weatherActions';

interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setLoading());
    dispatch(getWeather(city));
    setCity('');
  }

  return(
    <div >
      <h1 className="center blue-text ">{title}</h1>
      <form className="center " onSubmit={submitHandler}>
        <input 
          type="text"
          className="center "
          placeholder="City name"
          style={{maxWidth: 300}}
          value={city}
          onChange={changeHandler}
        />
      </form>
    </div>
  );  
}

export default Search;