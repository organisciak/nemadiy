package org.imirsel.nema.contentrepository.client;

import static org.junit.Assert.*;

import java.io.ByteArrayInputStream;

import java.io.IOException;

import javax.jcr.LoginException;
import javax.jcr.Repository;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.jcr.SimpleCredentials;
import javax.jcr.nodetype.NodeTypeIterator;

import org.apache.jackrabbit.api.JackrabbitNodeTypeManager;
import org.apache.jackrabbit.commons.NamespaceHelper;
import org.apache.jackrabbit.rmi.client.ClientRepositoryFactory;
import org.imirsel.nema.model.ExecutableBundle;
import org.imirsel.nema.model.RepositoryResourcePath;
import org.imirsel.nema.model.ResourcePath;
import org.imirsel.nema.test.BaseManagerTestCase;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class ContentRepositoryServiceTest extends BaseManagerTestCase {

	private SimpleCredentials nemaCredentials;
	private Repository repository = null;
	private ClientRepositoryFactory factory = new ClientRepositoryFactory();

	@Before
	public void setUp() throws Exception {
		repository = ContentRepositoryTestUtil.getTempRepository();
		nemaCredentials = new SimpleCredentials("user", "user".toCharArray());
		if (repository == null) {
			throw new Exception("Repository is null...");
		}
	}


	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testSaveExecutableBundle() throws ContentRepositoryServiceException {
		ContentRepositoryService crs = new ContentRepositoryService();
		crs.setRepository(repository);
		crs.validateNodeTypes(nemaCredentials);
		ExecutableBundle bundle = ContentRepositoryTestUtil.getExecutableBundle();
		try {
			crs.removeExecutableBundle(nemaCredentials,
					new RepositoryResourcePath("jcr","default","/users/user/flows/executables/testFlow/test.zip"));
			ResourcePath rp = crs.saveExecutableBundle(nemaCredentials,
					"testFlow", bundle);
			System.out.println(rp.getPath());
			assertEquals(rp.getPath(), "/users/user/flows/executables/testFlow/test.zip");
		} catch (ContentRepositoryServiceException e) {
			fail(e.getMessage());
		}

	}

	
	
	public void registerNodes() throws LoginException, RepositoryException, IOException{
		Session session = repository.login(nemaCredentials);
	    NamespaceHelper namespaceHelper = new NamespaceHelper(session);
	    namespaceHelper.registerNamespace("imirsel","http://www.imirsel.org/jcr");
	
	     JackrabbitNodeTypeManager manager =
	    (JackrabbitNodeTypeManager) session.getWorkspace().getNodeTypeManager();
	    
	    NodeTypeIterator nti=manager.getAllNodeTypes();
	    while(nti.hasNext()){
	    	System.out.println(nti.nextNodeType().getName());
	    }
	    
	    // create exec file
	    if(!manager.hasNodeType("exec:file")){
	   	   if (!manager.hasNodeType("ns:file")){
	        String cnd = "<exec = 'http://www.imirsel.org/jcr/exec'>\n";
	        cnd += "[exec:file] > nt:file\n";
	        cnd += "- execId (STRING) mandatory\n";
	        cnd += "- typeName (STRING) mandatory\n";
	        cnd += "- mainClass (STRING) mandatory ignore\n";
	        cnd += "- executableName (STRING) mandatory ignore\n";
	        cnd += "- commandLineFlags (STRING) mandatory\n";
	    
	        
	        byte cndArray[] = cnd.getBytes();
	        ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(cndArray);
	        manager.registerNodeTypes(byteArrayInputStream,JackrabbitNodeTypeManager.TEXT_X_JCR_CND); 
	        byteArrayInputStream.close();
		  }
	    }	  
         session.save();
         session.logout();
	}

	

	

}
