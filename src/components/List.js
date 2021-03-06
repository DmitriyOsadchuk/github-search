import '../App.css';
import React, { useState, useEffect } from 'react';
import { Form, Image, Grid } from 'semantic-ui-react'
import { Link } from "react-router-dom";

function List() {
  const [name, setName] = useState('');
  const [userName, setuserName] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  // const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [joinDate, setJoinDate] = useState('');
 
  useEffect(() => {
    fetch('https://api.github.com/users/example')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []);

  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url,
    email,
    location,
    created_at,
  }) => {
    setName(name);
    setuserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setEmail(email);
    setLocation(location);
    setJoinDate(created_at);
  };
  
  const handleSubmit = (e) => {
    fetch(`https://api.github.com/users/${e.target.value}`)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          setError(data.message)
        } else {
          setData(data);
          setError(null);
        }
      });
  };

  return (
    <div>
      <div className='search'>
        <Form >            
          <Form.Group>
            <Form.Input
              placeholder='Github User'
              name='github user'
              onChange={ handleSubmit }
            />

          </Form.Group>
        </Form>
      </div>
      { error ? (<h1>{error}</h1>) : (
        
        <div className='card'>
          <Link to='/user-profile'>
            <Grid  celled='internally' columns={3} centered>
              <Grid.Row>
                <Grid.Column width={2}>
                  <Image src={avatar} />
                </Grid.Column>
                <Grid.Column width={3}>
                  <h1>{userName}</h1>
                  <h1>{name}</h1>
                </Grid.Column>

                <Grid.Column width={3}>
                  <h1>Repo:{repos}</h1>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Link>
        </div>
      )};
  </div>
  )
}

export default List;