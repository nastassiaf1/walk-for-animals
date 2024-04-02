import { UserRole } from 'const/user';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useGetTeamsByNameQuery } from 'services/user';

import styles from './../styles/search.module.scss';
import mainStyles from './../styles/main.module.scss';
import loginStyles from './../styles/login.module.scss';

interface TeamSearchFormProps {
    onTeamSelect: (teamName: string) => void;
}

export default function TeamSearchForm({ onTeamSelect }: TeamSearchFormProps) {
    const { register, watch } = useForm<{ search: string }>();

    const searchTerm = watch('search', '');

    const { data: teams, isFetching } = useGetTeamsByNameQuery(searchTerm, {
        skip: searchTerm.length < 2,
    });

    const handleTeamSelect = (teamName: string) => {
        onTeamSelect(teamName);
    };

    return (
        <div>
            <label htmlFor="teamName" className={loginStyles.loginFormLabel}>
                <span>*</span> Team name:
            </label>
            <input
                {...register('search')}
                id="teamName"
                className={loginStyles.loginFormInput}
                autoComplete="off"
            />
            <div className={styles.searchContainer}>
                <p className={styles.searchHeader}>Search result</p>
                <ul>
                    {teams && teams.length ? (
                        teams?.map((team) => (
                            <li
                                key={team.id}
                                className={styles.searchResultItem}
                                role="button"
                                onClick={() => handleTeamSelect(team.id)}
                            >
                                <div>
                                    <h4
                                        className={
                                            styles.searchResultItemHeader
                                        }
                                    >
                                        {team.teamName}
                                    </h4>
                                    <span>
                                        <i>Team Captain:</i>
                                    </span>
                                    <br />
                                    <span>
                                        {team.firstName} {team.lastName}
                                    </span>
                                </div>

                                <div>
                                    <div
                                        className={`${mainStyles.buttonContainer} ${mainStyles.shortButton}`}
                                    >
                                        <button type="button">Join</button>
                                    </div>
                                </div>
                            </li>
                        ))
                    ) : isFetching ? (
                        <p className={styles.searchDescription}>Searching...</p>
                    ) : (
                        <p className={styles.searchDescription}>
                            No Teams found for the search criteria entered.
                        </p>
                    )}
                </ul>
            </div>

            <div className={styles.linkContainer}>
                <Link to={`/login?type=${UserRole.TEAM}`}>
                    Start a new team
                </Link>
                <span className={styles.linkDivider}>|</span>
                <Link to={`/login?type=${UserRole.INDIVIDUAL}`}>
                    Participate as an Participate as an individualindividual
                </Link>
            </div>
        </div>
    );
}
