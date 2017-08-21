using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MrFixIt.Models;
using Microsoft.EntityFrameworkCore;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MrFixIt.Controllers
{
    public class WorkersController : Controller
    {
        private MrFixItContext db = new MrFixItContext();
        // GET: /<controller>/
        public IActionResult Index()
        {
            var thisWorker = db.Workers.Include(i =>i.Jobs).FirstOrDefault(i => i.UserName == User.Identity.Name);
            if (thisWorker != null)
            {
                return View(thisWorker);
            }
            else
            {
                return RedirectToAction("Create");
            }
        }

        public IActionResult Create()
        {
            return View();
        }


        [HttpPost]
        public IActionResult Create(Worker worker)
        {
            worker.UserName = User.Identity.Name;
            db.Workers.Add(worker); 
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        public IActionResult ActiveForm(int id)
        {
            var thisItem = db.Jobs.FirstOrDefault(i => i.JobId == id);
            return View(thisItem);
        }

        [HttpPost]
        public IActionResult Activate(Job job)
        {
            Job thisJob = db.Jobs.FirstOrDefault(j => j.JobId == job.JobId);
            var thisWorker = db.Workers.Include(i => i.Jobs).FirstOrDefault(i => i.UserName == User.Identity.Name);
            thisJob.Active = true;
            db.Entry(thisJob).State = EntityState.Modified;
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        public IActionResult CompleteForm(int id)
        {
            var thisItem = db.Jobs.FirstOrDefault(i => i.JobId == id);
            return View(thisItem);
        }
        [HttpPost]
        public IActionResult Complete(Job job)
        {
            Job thisJob = db.Jobs.FirstOrDefault(j => j.JobId == job.JobId);
            thisJob.Completed = true;
            thisJob.Active = false;
            var thisWorker = db.Workers.Include(i => i.Jobs).FirstOrDefault(i => i.UserName == User.Identity.Name);
            db.Entry(thisJob).State = EntityState.Modified;
            db.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
