<div className="text-2xl font-bold lg:w-80">
  <Link
    to="/"
    className="text-secondary flex logo--hover-effect"
    onMouseEnter={(e) => {
      const link = e.currentTarget;
      if (!link.classList.contains('animate')) {
        link.classList.add('animate');
        setTimeout(() => {
          link.classList.remove('animate');
        }, 1400);
      }
    }}>
    <span className=" inline-block">G</span>
    <span className="inline-block">S</span>
    <span className="text-tertiary inline-block">.</span>
  </Link>
</div>
