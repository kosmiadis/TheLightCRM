import {Card, CardBody} from "@nextui-org/react";
import AccountInformation from "./ProfileCard/AccountInformation";
import UserInformation from "./ProfileCard/UserInformation";
import WorkInformation from './ProfileCard/WorkInformation';
import AccountActivity from './ProfileCard/AccountActivity/AccountActivity';

export default function ProfileCard ({user}) {
    return (<div className="flex flex-col gap-4">
        <Card className="w-full">
          <CardBody>
            <AccountInformation user={user}/>
          </CardBody>
        </Card>

        <Card className="w-full">
          <CardBody>
            <UserInformation user={user}/>
          </CardBody>
        </Card>
        
        <Card className="w-full">
          <CardBody>
            <WorkInformation user={user}/>
          </CardBody>
        </Card>

        <Card className="w-full">
          <CardBody>
            <AccountActivity />
          </CardBody>
        </Card>
    
      </div>
    );
    
  }