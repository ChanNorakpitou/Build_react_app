function ProfileBody ({email, location, skills}) {
    return(
        <tbody>
          <tr>
            <th scope="row">Email</th>
            <td>
              <a href="Email">
                {email}
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">Location</th>
            <td>{location}</td>
          </tr>
          <tr>
            <th scope="row">Skills</th>
            <td>{skills}</td>
          </tr>
        </tbody>
    )
}

export default ProfileBody;