import { StringMappingType } from "typescript";

type Props = {
  email: string,
  sns: {
    type: string,
    id: string,
    address: string
  },
  website: {
    name: string,
    address: string
  }
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
        {(typeof sns !== undefined && sns !== null && sns.type !== 'none') ?
          <li>
            sns:  <a href={`${sns.address}`}>{sns.id}</a> ({sns.type})
          </li> :
          ''
        }
        {(typeof website !== undefined && website !== null && website.name !== 'none') ?
          <li>
            website: <a href={`${website.address}`} >{website.name}</a>
          </li> : ''
        }
      </ul>
    </div>
  )
}

export default MemberContact
