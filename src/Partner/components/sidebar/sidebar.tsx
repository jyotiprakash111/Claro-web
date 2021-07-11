interface LeftBarOption {
    label: string;
    class: string;
    link?: string;
    child?: LeftBarOption[];
}
const LeftBarOptions: LeftBarOption[] = [
    {
        label: 'Home',
        class: 'bi bi-house-door',
        link: ''
    },
    {
        label: 'Services',
        link: '',
        class: 'bi bi-list',
        child: [
            {
                label: 'Classes',
                class: 'bi bi-dot'
            }
        ]
    },
    {
        label: 'Schedule',
        link: '',
        class: 'bi bi-calendar3'
    },
    {
        label: 'Customers',
        link: '',
        class: 'bi bi-people'
    },
];

export const SiderbarComponent = () => {
    return <div className="sidebar">
        <div className="sidebar-wrapper">
            {createOptions(LeftBarOptions)}
            <div className="sb-menu-footer">
                <a href=""><i className="bi bi-question-circle"></i> Help</a>
                <p>Powered by Claroo</p>
            </div>
        </div>
    </div>
}

const createOptions = (options: LeftBarOption[]) => {
    return <ul className="sb-menu">
        {options.map(option => getOption(option))}
    </ul>;
}

const getOption = (option: LeftBarOption) => {
    return <li key={option.label}>
        <a href={option.link}><i className={option.class}></i> {option.label}</a>
        {option.child ? createOptions(option.child) : null}
    </li>;
}

export default SiderbarComponent;