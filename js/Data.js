const pages = [
    {
        pageName: 'email-searching',
        data: {
            emailSearch: {
                info: {
                    home: {
                        title: 'Search Any Email Address',
                        desc: ' - Look up the owner\'s name, photos and online profiles. See what you find!',
                        highlight: 'Start Here '
                    },
                    result: {
                        title: 'Search Any Email Address',
                        desc: ' - Make a new search.',
                        highlight: 'Try Again '
                    },
                },
                btnSearch: 'Go!',
                errors: {
                    invalidEmail: 'Please add a valid email address'
                },
                warn: 'Enter Any Email Address. They won\'t be notified.'
            },
            results: {
                title: (num) => `${num} Results`,
                desc: {
                    sucss: 'Look at the result below to see the details of the person you’re searched for.',
                    faild: 'Try starting a new search below'
                }
            },
            loading: {
                mess: 'Please wait a moment...'
            },
            instrucctions: {
                title: 'Lorem Ipsum',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                list: [
                    {
                        title: 'Lorem Ipsum',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    },
                    {
                        title: 'Lorem Ipsum',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    },
                    {
                        title: 'Lorem Ipsum',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    },
                    {
                        title: 'Lorem Ipsum',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    },
                    {
                        title: 'Lorem Ipsum',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    },
                    {
                        title: 'Lorem Ipsum',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    },
                    {
                        title: 'Lorem Ipsum',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    }
                ]
            }
        }
    }
]