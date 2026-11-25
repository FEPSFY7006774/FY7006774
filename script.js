// Adding last updated

async function getLastUpdatedTime() {
        const username = `FEPSFY7006774`;
        const repo = `FY7006774`;

        const url = `https://api.github.com/repos/${username}/${repo}/commits`;
        try {
            const response = await fetch(url, {
                method: `GET`,
                headers: {
                    `Accept`: `application/vnd.github.v3+json`,
                }
            });
            
             if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status} - ${response.statusText}`);
            }

            const commits = await response.json();
            if (commits && commits.length > 0) {
                const lastCommitDate = new Date(commits[0].commit.committer.date);

                // Displaying the time on load
                document.getElementById(`last-updated`).innerText = `Last Modified Time: ${lastCommitDate.toLocaleString()`};
            } else {
                document.getElementById(`last-updated`).innerText = `No commits found in the repository.`;
        }
    } catch (error) {
        console.error(`Error fetching the last updated time:`, error);
        document.getElementById(`last-updated`).innerText = `Error fetching update time. Please check the repository details.`;
    }
}

// Function to verify the last update time by re-fetching it from the API
async function verifyLastUpdatedTime() {
    document.getElementById(`last-updated`).innerText = `Verifying...`;
    await getLastUpdatedTime();
    alert(`Last modified time has been successfully verified from GitHub API.`);
}

// Word count
const countedSections = [`introduction`, `drag`, `pressure`, `propulsion`, `biomimetics`, `conclusion`];

// counts words in one section
function displayWordCount(sectionId) {
    // get text from section
    const text = document.getElementById(sectionId).textContent;
    // split text into words and filter empty strings 
    const wordArray = text.trim().split(/\s+/).filter(word => word !== ``);
    //return word count
    return wordArray.length;
}

//add up every counted section
function displayTotalWordCount() {
    let totalWordCount = 0;
    for (const sectionId of countedSections) {

    totalWordCount += displayWordCount(sectionId);
    }
    document.getElementById(`word-count`).innerText = Total word count: ${totalWordCount};

}

// run both when loads
window.onload = function() {
        getLastUpdaedTime();
        displayTotalWordCount;
};


/*
// ---------- Last updated time stamp ----------
async function getLastUpdatedTime() {
    const username = 'FEPSFY7006774';
    const repo = 'FY7006774';

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

            // Displaying the time
            document.getElementById('last-updated').innerText = `Last Modified Time: ${lastCommitDate.toLocaleString()}`;
        } else {
            document.getElementById('last-updated').innerText = 'No commits found in the repository.';
        }
    } catch (error) {
        console.error('Error fetching the last updated time:', error);
        document.getElementById('last-updated').innerText = 'Error fetching update time. Please check the repository details.';
    }
}

// Function to verify the last update time by re-fetching it from the API
async function verifyLastUpdatedTime() {
    document.getElementById('last-updated').innerText = 'Verifying...';
    await getLastUpdatedTime();
    alert(`Last modified time has been successfully verified from GitHub API.`);
}

// ---------- Word count ----------
const countedSections = [`introduction`, `drag`, `pressure`, `propulsion`, `biomimetics`, `conclusion`];

// counts words in one section
function displayWordCount(sectionId) {
    // get text from section
    const text = document.getElementById(sectionId).textContent;
    // split text into words and filter empty strings
    const wordArray = text.trim().split(/\s+/).filter(word => word !== ``);
    // return word count
    return wordArray.length;
}

// add up every counted section
function displayTotalWordCount() {
    let totalWordCount = 0;
    for (const sectionId of countedSections) {
        totalWordCount += displayWordCount(sectionId);
    }
    document.getElementById(`word-count`).innerText = `Total word count: ${totalWordCount}`;
}

// run BOTH when the page loads (only one window.onload is allowed,
// a second one would replace the first)
window.onload = function () {
    getLastUpdatedTime();
    displayTotalWordCount();
};
*/
