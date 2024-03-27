import { useLocation } from 'react-router-dom';
import { UserRole } from 'const/user';
import UserForm from './forms/userForm';
import TeamForm from './forms/teamForm';
import TeammateForm from './forms/teammateForm';
import NotFoundPage from 'pages/NotFoundPage';

export default function RegistrationForm() {
    const location = useLocation();
    const userType = new URLSearchParams(location.search).get('type');

    return (
        <>
            {userType === UserRole.INDIVIDUAL ? (
                <UserForm />
            ) : userType === UserRole.TEAM ? (
                <TeamForm />
            ) : userType === UserRole.TEAMMATE ? (
                <TeammateForm />
            ) : (
                <NotFoundPage />
            )}
        </>
    );
}
