
// setting handler
	var tools = [{
        id:'gear',
        handler: function(){
            Ext.Msg.alert('Message', 'Portlet Settings was clicked.');
        }
    }];


    var tab_tools = [{
        id:'gear',
        handler: function(){
            //Ext.Msg.alert('Message', 'Portal Tab Settings was clicked.');

		// tabs for the center
       	var win_tabs = new Ext.TabPanel({
           	region: 'center',
           	margins:'3 3 3 0', 
           	activeTab: 0,
           	defaults:{autoScroll:true},

           	items:[{
                title: 'Bogus Tab',
                html: "tab"	//Ext.example.bogusMarkup
           	},{
                title: 'Another Tab',
               	html: "tab2"	//Ext.example.bogusMarkup
           	},{
                title: 'Closable Tab',
               	html: "close tab",	//Ext.example.bogusMarkup,
               	closable:true
           	}]
       	});
        	
			var win = new Ext.Window({
            	title: 'Personal Settings',
            	closable:true,
            	//constrain:true,
            	modal:true, //True to make the window modal and mask everything behind it when displayed 
            	width:600,
            	height:350,
            //	border:false,
            	plain:true,
            	layout: 'border',
	            items: [win_tabs]
        });

        win.show(this);
        }
    }];

    var myLinks_tools = [{
      id:'gear',
      handler: function(){
		// tabs for the center
       	var win_panel = new Ext.Panel({
           	region: 'center',
           	margins:'3 3 3 0', 
           	activeTab: 0,
           	defaults:{autoScroll:true},

           	items:[{
                title: 'Bogus Tab',
                html: 'tab<br>'	//Ext.example.bogusMarkup
           	},{
                title: 'Another Tab',
               	html: 'tab2<br><br>Select your favorite here'	//Ext.example.bogusMarkup
           	},{
                title: 'Closable Tab',
               	html: 'close tab',	//Ext.example.bogusMarkup,
               	html: 'tab3',
               	closable:true
           	}]
       	});
        	
			var win = new Ext.Window({
            	title: 'Personal Settings',
            	closable:true,
            	//constrain:true,
            	modal:true, //True to make the window modal and mask everything behind it when displayed 
            	width:600,
            	height:350,
            //	border:false,
            	plain:true,
            	layout: 'border',
	            items: [win_panel]
        });

        win.show(this);
        }
    }];
    
    var tab1_tools = [{
        id:'gear',
        handler: function(){
            Ext.Msg.alert('Message', 'Learner Portal Settings was clicked.');
        }
    }];

    var tab2_tools = [{
        id:'gear',
        handler: function(){
            Ext.Msg.alert('Message', 'Manager Portal Settings was clicked.');
        }
    }];


Ext.onReady(function(){
	
	Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

	var learnerGrid = new SampleGrid([0, 2, 3]);	//
	var managerGrid = new SampleGrid([0, 1, 2, 3]);	//

	var tabPortlet = new Ext.TabPanel({
		region: 'center',
		activeTab:0,  //from 0,1,..
       	defaults:{autoScroll:true},
       	width:'auto',
	    height:'auto',
		items:[
		{
			id:'pTab1',
	   		title: 'Pending',
   			closable:false,	//required
   			autoScroll:true,
   			html:'head<br><br><br><br>tail'
   			/*items:[{
                		title: 'Another Panel 1',
                		tools: tools,
                		html: 'head<br><br><br><br>tail'
	            	}]*/
		},{
			id:'pTab2',
	   		title: 'Course',
   			closable:false,	//required
   			autoScroll:true,
			html:'head2<br><br><br><br>tail2'
		}]
	}); 
	
    var learner_portal = new Ext.Panel({
	title: 'Dashboard1',
        tools: tab1_tools,
	layout:'fit',	//required
        items:[
        {
			xtype:'portal',	//required for apply correct column layout
            items:[
           	{
                columnWidth:.30,
                style:'padding:10px 0 10px 10px',
                //widgets
                items:[{
                    title: 'Another Panel 1',
                    tools: tools,
                    html: "here"
                },{
                    title: 'Another Panel 2',
                    tools: tools,
                    html: "here2"
                }]
            },{
                columnWidth:.40,
                style:'padding:10px 0 10px 10px',
                //widgets
                items:[{
                    title: 'Grid in a Portlet',
                	layout: 'fit',	//required for grid
                    tools: tools,
	                items: learnerGrid
                }]
			},{
                columnWidth:.30,
                style:'padding:10px 0 10px 10px'
            }]
        }]
    });
    
    var manager_portal = new Ext.Panel({
    	title: 'Dashboard2',
	tools: tab2_tools,
	layout: 'fit',	//required
        items:[
        {
            xtype:'portal',	//required for apply correct column layout
            items:[
           	{
                columnWidth:.25,
                style:'padding:10px 0 10px 10px',
                //widgets
                items:[{
                    title: 'myLinks',
                    tools: myLinks_tools,
                    html: "Link1<br>Link2<br>CyberLink"
                },{
                    title: 'Another Panel 1',
                    tools: tools,
                    html: "here"
                }]
            },{
                columnWidth:.50,
                style:'padding:10px 0 10px 10px',
                //widgets
                items:[{
                    title: 'Grid in a Portlet',
                	layout: 'fit',	//required for grid
                    tools: tools,
	                items: managerGrid
                },{
                    title: 'Course Search',
                    //layout: 'fit', not required for tabPortlet
                    tools: tools,
	                items: [
	                /*{
	                	//title:'none'
	                	id:'a',
	                	html:'search',
	                	frame:true,
	                	height:10
	                },*/
	                	tabPortlet
	                ]
                }]
			},{
                columnWidth:.25,
                style:'padding:10px'
            }]
        }]
    });

	// Menu containing actions
	var tabActions = new Ext.Panel({
		frame:true,
		title: 'Actions',
		collapsible:true,
		contentEl:'actions',
		titleCollapse: true
	});
 
// 	Parent Panel to hold actions menu
	var actionPanel = new Ext.Panel({
		id:'action-panel',
	 	region:'west',
	   	split:true,
	   	collapsible: true,
	   	collapseMode: 'mini',
	   	width:200,
	   	minWidth: 150,
	   	border: false,
	  	baseCls:'x-plain',
	   	items: [tabActions]
	});

	// Adds tab to center panel
    function addTab(tabTitle, targetUrl){
        tabPanel.add({
	    	title: tabTitle,
	    	iconCls: 'tabs',
	    	//autoLoad: {url: targetUrl, callback: this.initSearch, scope: this},
	    	closable:true
		}).show();
    }
 
    // Update the contents of a tab if it exists, otherwise create a new one
    function updateTab(tabId,title, url) {
    	var tab = tabPanel.getItem(tabId);
    	if(tab){
    		//tab.getUpdater().update(url);
    		tab.setTitle(title);
    	}else{
    		tab = addTab(title,url);
    	}
    	tabPanel.setActiveTab(tab);
    }
    
	// Main (Tabbed) Panel
	var tabPanel = new Ext.TabPanel({
		region:'center',	//required
		//deferredRender:false,
		autoScroll: true, 
		activeTab:1,  //from 0,1,..
		//layoutOnTabChange: true,	optional
		items:[
		{
			id:'tab1',
	   		title: 'Learner\'s Portal Tab',
			layout: 'fit',	//required
   			closable:false,	//required
   			autoScroll:true,
   			tools: tab1_tools,
   			items:[learner_portal]	//actual portal want to show in Tab dashboard
		},
		{
			id:'tab2',
			layout: 'fit',	//required
   			title: 'Manager\'s Portal',
   			closable:false,	//required
   			autoScroll:true,
   			tools: tab2_tools,
   			items:[manager_portal]
		}]        
	});


	var northPanel = new Ext.Panel({
		title: ' ',	//1 blank fo showing setting icon
		id:'north-panel',
 		region:'north',
   		split:true,
   		collapsible: false,
   	//	collapseMode: 'mini',
   		width: 'auto',	//200,
   	//	minWidth: 150,
   		border: false,
  		baseCls:'x-plain',
  		tools: tab_tools,
  		html: 'North<br><br><br>'
	});

    // Configure viewport
    viewport = new Ext.Viewport({
		layout:'border',
        items:[
        	actionPanel,
        	tabPanel,
        	northPanel
        ]
	});
	
    // Map link ids to functions
    var count = 0;
    var actions = {
    	'create' : function(){
    		addTab("New Tab",'loripsum.html');
    	},
    	'use' : function(){
    		// Toggle between sample pages
    		updateTab('tab1','Replaced ' + count + ' Times','sample'+(count%2)+'.html');
    		count++;	    		
    	}
    };
 
    function doAction(e, t){
    	e.stopEvent();
    	actions[t.id]();
    }
    
	// This must come after the viewport setup, so the body has been initialized
    actionPanel.body.on('mousedown', doAction, null, {delegate:'a'});

    
});
