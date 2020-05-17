using System.Reflection;
using DbUp;
using Microsoft.Extensions.Configuration;

namespace WebApi.Configurations
{
    public static class ConfigurationExtensions
    {
        public static void AddDbUp(this IConfiguration self)
        {
            var connectionString = self.GetConnectionString("DefaultConnection");
            EnsureDatabase.For.SqlDatabase(connectionString);

            var upgrader = DeployChanges.To.SqlDatabase(connectionString, null)
                .WithScriptsEmbeddedInAssembly(Assembly.GetExecutingAssembly())
                .WithTransaction()
                .Build();

            if (upgrader.IsUpgradeRequired())
            {
                upgrader.PerformUpgrade();
            }
        }
    }
}
