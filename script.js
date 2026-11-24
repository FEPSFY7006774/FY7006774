// //////////////////////////////////////////////////////////////
// 1. LAST UPDATED TIME STAMP
// //////////////////////////////////////////////////////////////

// Gets the time of the latest commit from GitHub and shows it on the page
async function getLastUpdatedTime() {
    const username = 'FEPSFY7006774';   // YOUR GitHub username
    const repo = 'FY7006774';           // YOUR repository name

    const url = `https://api.github.com/repos/${username}/${repo}/commits`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.github.v3+json',
            }
        });
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status} - ${response.statusText}`);
        }
        const commits = await response.json();
        if (commits && commits.length > 0) {
            const lastCommitDate = new Date(commits[0].commit.committer.date);

            // Displaying the time on load
            document.getElementById('last-updated').innerText = `Last Modified Time: ${lastCommitDate.toLocaleString()}`;
        } else {
            document.getElementById('last-updated').innerText = 'No commits found in the repository.';
        }
    } catch (error) {
        console.error('Error fetching the last updated time:', error);
        document.getElementById('last-updated').innerText = 'Error fetching update time. Please check the repository details.';
    }
}

// Re-fetches the time from the API when the button is clicked
async function verifyLastUpdatedTime() {
    document.getElementById('last-updated').innerText = 'Verifying...';
    await getLastUpdatedTime();
    alert("Last modified time has been successfully verified from GitHub API.");
}

// //////////////////////////////////////////////////////////////
// 2. WORD COUNT
// //////////////////////////////////////////////////////////////

// The ids of the sections that should be counted.
// These must match the id="..." on your <section> tags in index.html.
// Leave out the abstract and references, as they are not counted.
const countedSections = [
    'introduction',
    'drag',
    'pressure',
    'propulsion',
    'biomimetics',
    'conclusion'
];

// Counts the words inside ONE section
function displayWordCount(sectionId) {
    // Get the text content from the specified section
    const text = document.getElementById(sectionId).textContent;
    // Split text into words based on spaces and filter out any empty strings
    const wordArray = text.trim().split(/\s+/).filter(word => word !== '');
    // Return the word count for summing purposes
    return wordArray.length;
}

// Adds up every counted section and shows the total on the page
function displayTotalWordCount() {
    let totalWordCount = 0;
    for (const sectionId of countedSections) {
        totalWordCount += displayWordCount(sectionId);
    }
    document.getElementById('word-count').innerText = `Total word count: ${totalWordCount}`;
}

// //////////////////////////////////////////////////////////////
// 3. RUN BOTH WHEN THE PAGE LOADS
// //////////////////////////////////////////////////////////////
// Only ONE window.onload is allowed: a second one replaces the first
window.onload = function () {
    getLastUpdatedTime();
    displayTotalWordCount();
};
