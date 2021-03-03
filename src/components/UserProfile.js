<div className = "user_profile">
        <Grid>
          <Grid.Column width={2}>
            <Image src= {avatar} />
          </Grid.Column>
          <Grid.Column width={3}>
            <h2>
              User Name: {userName}</h2>
            <h2>
              Email: {email}
            </h2>
            <h2>
              Location: {location}
            </h2>
            <h2>
              Join Date: {joinDate}
            </h2>
            <h2>
              {followers} Followers
            </h2>
            <h2>
              Folowing {following}
            </h2>
          </Grid.Column>
        </Grid>
    </div>
