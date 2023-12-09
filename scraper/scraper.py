from jobspy import scrape_jobs
import firebase_admin
from firebase_admin import firestore

app = firebase_admin.initialize_app(options={"projectId": "college-jobs"})
db = firestore.client()
collection = db.collection("JobListing")

print("Scraping...")
jobs = scrape_jobs(
    site_name="indeed",
    search_term="software engineer",
    country_indeed="USA",
    results_wanted=30
).to_dict('records')
print(f"Found {len(jobs)} jobs")

print("Flushing old jobs from Firestore")
docs = collection.list_documents(page_size=30)
for doc in docs:
    doc.delete()

print("Sending jobs to Firestore")
i = 0
for job in jobs:
    fjob = {
        'id': i,
        'url': job['job_url'],
        'title': job['title'],
        'company': job['company'],
        'description': job['description'],
        'criteria': [{'field': "Location", 'value': job['location']}]
    }
    doc = collection.document()
    doc.set(fjob)
    i = i + 1
print("Done!")
