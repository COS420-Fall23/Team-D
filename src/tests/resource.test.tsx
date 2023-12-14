
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ResourcePage } from "../pages/ResourcePage";
import { getResourceListings } from "../dummy/resource_listings";

// Mock the dummy resource listings
jest.mock("../dummy/resource_listings");

describe("ResourcePage", () => {
  beforeEach(() => {
    // Reset the mock before each test
    jest.clearAllMocks();
  });

  test("renders resource page with listings", () => {
    // Mock the dummy listings data
    const dummyListings: string | any[] = [
      // ... your dummy listings
    ];

    // Mock the function to return the dummy listings
    (getResourceListings as jest.Mock).mockReturnValue(dummyListings);

    // Render the component within a MemoryRouter
    // memory router should have the /resources route
    render(
      <MemoryRouter initialEntries={['/resources']}>
        <ResourcePage />
      </MemoryRouter>
    );

    // Assertions
    expect(screen.getByText("Resources For College Job Hunters")).toBeInTheDocument();
    expect(screen.getByText("Home Page")).toBeInTheDocument(); // This has been moved to header.test.tsx

    // Check if the dummy listing content is rendered
    const helpfulInterviewQuestions = screen.queryAllByText(
      "Helpful Interview Questions"
    );
    expect(helpfulInterviewQuestions).toHaveLength(dummyListings.length); // Adjust this based on your actual content

    helpfulInterviewQuestions.forEach((questions, index) => {
      expect(questions).toBeInTheDocument();
      // Add more expectations based on your actual content
    });

    

    // You can add more assertions based on your actual content
  });
});
