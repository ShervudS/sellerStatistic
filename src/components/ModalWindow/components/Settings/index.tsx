import React, { FC } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks';

import ModalWindow from '../..';

import { setIsWbToken, selectApp } from '../../../../redux/redusers/appReducer';

import styles from './settings.module.scss';

interface SettingsProps {}

const optionsTimeRequestWb = [
    {
        value: 1,
        label: 'Раз в 1ч',
    },
    {
        value: 2,
        label: 'Раз в 2ч',
    },
    {
        value: 3,
        label: 'Раз в 3ч',
    },
    {
        value: 6,
        label: 'Раз в 6ч',
    },
    {
        value: 12,
        label: 'Раз в 12ч',
    },
];

const Settings: FC<SettingsProps> = ({}) => {
    const dispatch = useAppDispatch();
    const state = useAppSelector(selectApp);
    const { wbToken } = state;

    const changeWbToken = (token) => {
        localStorage.setItem('wbToken', token);
        dispatch(setIsWbToken(token));
    };

    return (
        <ModalWindow title="Настройки">
            <div className={styles.fieldSettings}>
                <h4>Токен Wildberries</h4>

                <textarea
                    className={styles.inputToken}
                    placeholder="Введите API Token"
                    // defaultValue={localStorage.getItem('wbToken') || wbToken}
                    onChange={(e) => changeWbToken(e.target.value)}
                />
            </div>

            <div className={styles.fieldSettings}>
                <h4>Время обновления данных</h4>

                <select defaultValue={1}>
                    {optionsTimeRequestWb.map((item) => (
                        <option value={item.value} key={item.value.toString()}>
                            {item.label}
                        </option>
                    ))}
                </select>
            </div>
        </ModalWindow>
    );
};

export default Settings;
