
type Props = {
  email: string,
  sns: {
    type: string,
    id: string,
    address: string
  },
  website: string
}

const MemberContact = ({ email, sns, website }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <ul>
        {(typeof email !== undefined && email !== null && email !== '') ?
          <li>
            email: <a href={`mailto:${email}`} >{email}</a>
          </li> :
          ''
        }
        {(typeof sns !== undefined && sns !== null && sns.type !== '') ?
          <li>
            sns:  <a href={`${sns.address}`}>{sns.id}</a> ({sns.type})
          </li> :
          ''
        }
        {(typeof website !== undefined && website !== null && website !== '') ?
          <li>
            website: <a href={`http://${website}`} >{website}</a>
          </li> : ''
        }
      </ul>
    </div>
  )
}

export default MemberContact
