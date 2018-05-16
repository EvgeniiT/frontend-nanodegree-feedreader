$(function() {
    describe('RSS Feeds', function() {
      /* Tests to make sure that the
       * allFeeds variable has been defined and that it is not
       * empty.
       */
      it('are defined', function() {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).not.toBe(0);
      });

      /* Test that loops through each feed
       * in the allFeeds object and ensures it has a URL defined
       * and that the URL is not empty.
       */
       it('feed number has defined URL and it is not empty', function() {
         allFeeds.forEach(function(feed) {
           expect(feed.url).toBeDefined();
           expect(feed.url.length).not.toBe(0);
         });
       });

      /* Test that loops through each feed
       * in the allFeeds object and ensures it has a name defined
       * and that the name is not empty.
       */
       it('feed number has defined name and it is not empty', function() {
         allFeeds.forEach(function(feed) {
           expect(feed.name).toBeDefined();
           expect(feed.name.length).not.toBe(0);
         });
       });
    });

    describe('The menu', function() {
      /* Test that ensures the menu element is
       * hidden by default.
       */
      it('ensures the menu element is hidden by default', function() {
        expect($('body').hasClass('menu-hidden')).toBe(true);
      });
       /* Test that ensures the menu changes
        * visibility when the menu icon is clicked.
        */
      it('ensures the menu changes visibility when the menu icon is clicked', function() {
        if ($('body').hasClass('menu-hidden')) {
          $('.menu-icon-link').click();
          expect($('body').hasClass('menu-hidden')).toBe(false);
        } else {
          $('.menu-icon-link').click();
          expect($('body').hasClass('menu-hidden')).toBe(true);
        }
      });
    });

    describe('Initial Entries', function() {
      beforeEach(function(done) {
        loadFeed(0, function() {
          done();
        });
      });
      /* Test that ensures when the loadFeed
      * function is called and completes its work, there is at least
      * a single .entry element within the .feed container.
      */
      it('ensures when the loadFeed function is called and completes its work,\
          there is at least a single .entry element within the .feed container'
        , function(done) {
            expect($('.entry').length).toBeGreaterThan(0);
            console.log($('.entry').length);
            done();
      });
    });

    describe('New Feed Selection', function() {
      let content = '';
      let prevContent = '';
      beforeEach(function(done) {
        loadFeed(0, function() {
          prevContent = $('.feed').text();
          loadFeed(1, function() {
            content = $('.feed').text();
            console.log(content);
            console.log(prevContent);
            done();
          });
        });
      });
      /* Test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       */
      it('ensures when a new feed is loaded\
          by the loadFeed function that the content actually changes', function(done) {
            expect(content).not.toBe(prevContent);
            done();
          });
    });
}());
