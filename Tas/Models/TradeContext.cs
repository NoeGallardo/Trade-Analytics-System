using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Tas.Models
{
    public partial class TradeContext : DbContext
    {
        public TradeContext()
        {
        }

        public TradeContext(DbContextOptions<TradeContext> options)
            : base(options)
        {
        }

        public virtual DbSet<MxFreight> MxFreights { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=GDLM15464\\SQLEXPRESS;Database=Trade; Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<MxFreight>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("MxFreight");

                entity.Property(e => e.Accounttype)
                    .HasMaxLength(255)
                    .HasColumnName("ACCOUNTTYPE");

                entity.Property(e => e.Bp)
                    .HasMaxLength(255)
                    .HasColumnName("BP");

                entity.Property(e => e.Currency)
                    .HasMaxLength(255)
                    .HasColumnName("CURRENCY");

                entity.Property(e => e.Descriptionaccount)
                    .HasMaxLength(255)
                    .HasColumnName("DESCRIPTIONACCOUNT");

                entity.Property(e => e.Descriptionaccounterp)
                    .HasMaxLength(255)
                    .HasColumnName("DESCRIPTIONACCOUNTERP");

                entity.Property(e => e.Dim1)
                    .HasMaxLength(255)
                    .HasColumnName("DIM1");

                entity.Property(e => e.Financeweek)
                    .HasMaxLength(255)
                    .HasColumnName("FINANCEWEEK");

                entity.Property(e => e.Glaccount)
                    .HasMaxLength(255)
                    .HasColumnName("GLACCOUNT");

                entity.Property(e => e.Incurredsite)
                    .HasMaxLength(255)
                    .HasColumnName("INCURREDSITE");

                entity.Property(e => e.Logisticscompany).HasColumnName("LOGISTICSCOMPANY");

                entity.Property(e => e.Mode)
                    .HasMaxLength(255)
                    .HasColumnName("MODE");

                entity.Property(e => e.Mode1)
                    .HasMaxLength(255)
                    .HasColumnName("MODE1");

                entity.Property(e => e.Month1)
                    .HasColumnType("date")
                    .HasColumnName("MONTH1");

                entity.Property(e => e.MxFlui)
                    .HasMaxLength(255)
                    .HasColumnName("MX_FLUI");

                entity.Property(e => e.Operationtype)
                    .HasMaxLength(255)
                    .HasColumnName("OPERATIONTYPE");

                entity.Property(e => e.Projectdesc)
                    .HasMaxLength(255)
                    .HasColumnName("PROJECTDESC");

                entity.Property(e => e.Projectitem)
                    .HasMaxLength(255)
                    .HasColumnName("PROJECTITEM");

                entity.Property(e => e.Provider)
                    .HasMaxLength(255)
                    .HasColumnName("PROVIDER");

                entity.Property(e => e.Regimen)
                    .HasMaxLength(255)
                    .HasColumnName("REGIMEN");

                entity.Property(e => e.Site)
                    .HasMaxLength(255)
                    .HasColumnName("SITE");

                entity.Property(e => e.Sumoftotalfreightandduties).HasColumnName("SUMOFTOTALFREIGHTANDDUTIES");

                entity.Property(e => e.Sumofusdamount).HasColumnName("SUMOFUSDAMOUNT");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
