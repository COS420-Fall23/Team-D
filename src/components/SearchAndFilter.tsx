import { Form } from "react-bootstrap";

export interface SearchAndFilterProps {
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
    filterLocation: string;
    setFilterLocation: (filterLocation: string) => void;
}

export function SearchAndFilter(props: SearchAndFilterProps): JSX.Element {
    return (
        <div className="searchAndFilter">
            <Form>
                <Form.Control
                    type="text"
                    placeholder="Search by company or title"
                    value={props.searchTerm}
                    onChange={(event) =>
                        props.setSearchTerm(event.target.value)
                    }
                />
                <Form.Control
                    type="text"
                    placeholder="Search by location"
                    value={props.filterLocation}
                    onChange={(event) =>
                        props.setFilterLocation(event.target.value)
                    }
                />
            </Form>
        </div>
    );
}
