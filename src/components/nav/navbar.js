function NavBar(props) {
    const tabs = ['Home', 'Movies', 'TV-Shows', 'Discussions']
    return (
        <header>
            <div className="container">
                <nav>
                    <ul>
                        {tabs.map(currentTab => (
                            <li key={currentTab} >
                                <a
                                    href={currentTab.toLowerCase()}
                                    onClick={() => props.handlePageChange(currentTab)}
                                    className={

                                        props.currentPage === currentTab ? `nav-link active text-success` : 'nav-link'
                                    }
                                >
                                    {currentTab}
                                </a>
                            </li>
                        ))
                        }
                    </ul >
                </nav>

                <h3 id="title">Y.E.R</h3>
            </div>
        </header>
    );
}

export default NavBar;