
type Props = {
  email: string,
  sns: string,
  website: string
}

const ArtistContact = ({ email, sns, website }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <ul>
        {(typeof email !== undefined && email !== null) ?
          <li>
            email: {email}
          </li> :
          ''
        }
        {(typeof sns !== undefined && sns !== null) ?
          <li>
            sns: {sns}
          </li> :
          ''
        }
        {(typeof website !== undefined && website !== null) ?
          <li>
            website: {website}
          </li> : ''
        }
      </ul>
    </div>
  )
}

export default ArtistContact
