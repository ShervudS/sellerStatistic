import IconSettings from '../../assets/images/icon/icon-settings.svg';

import styles from './Icons.module.scss';

interface IconProps {
    name: string;
    classes: string;
    beforeLabel?: string;
    afterLabel?: string;
}

const Icons = ({ name, classes, beforeLabel, afterLabel }: IconProps) => {
    // const { name = '', classes = '', beforeLabel, afterLabel } = props;

    return (
        <div className={styles.wrapper + classes}>
            {beforeLabel}
            {/*<svg className={styles.icon + classes}>*/}
            {/*    <use href={sprite + '#' + name} />*/}
            {/*</svg>*/}
            <IconSettings />
            {afterLabel}
        </div>
    );
};

export default Icons;
